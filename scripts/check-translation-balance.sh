#!/bin/bash

# HTML Tag Balance Checker for Translated Markdown Files
# Usage: ./check-translation-balance.sh [language_code]
# Example: ./check-translation-balance.sh ru
# Example: ./check-translation-balance.sh (checks all languages)

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Change to project root
cd "$PROJECT_ROOT"

# Find all i18n directories in the monorepo
I18N_DIRS=$(find packages -type d -name "i18n" 2>/dev/null)

if [ -z "$I18N_DIRS" ]; then
  echo -e "${RED}❌ No i18n directories found${NC}"
  exit 1
fi

echo "🔍 Checking HTML tag balance in translations..."
echo ""

TOTAL_FILES=0
BALANCED_FILES=0
UNBALANCED_FILES=0
TARGET_LANG=${1:-""}

for I18N_DIR in $I18N_DIRS; do
  PACKAGE_NAME=$(echo "$I18N_DIR" | cut -d'/' -f2)
  echo "📦 Package: $PACKAGE_NAME"
  echo "   Path: $I18N_DIR"
  echo ""
  
  # Get all language directories
  if [ -n "$TARGET_LANG" ]; then
    LANG_DIRS=$(find "$I18N_DIR" -maxdepth 1 -type d -name "$TARGET_LANG" 2>/dev/null)
  else
    LANG_DIRS=$(find "$I18N_DIR" -maxdepth 1 -type d -mindepth 1 2>/dev/null)
  fi
  
  for LANG_DIR in $LANG_DIRS; do
    LANG_CODE=$(basename "$LANG_DIR")
    
    # Skip if not a language directory
    if [ "$LANG_CODE" = "i18n" ]; then
      continue
    fi
    
    # Find all markdown files in this language
    MD_FILES=$(find "$LANG_DIR" -type f -name "*.md" 2>/dev/null || true)
    
    if [ -z "$MD_FILES" ]; then
      continue
    fi
    
    echo "  🌍 Language: $LANG_CODE"
    
    for FILE in $MD_FILES; do
      TOTAL_FILES=$((TOTAL_FILES + 1))
      
      # Count opening and closing div tags
      OPEN_COUNT=$(grep -o "<div" "$FILE" 2>/dev/null | wc -l | tr -d ' ')
      CLOSE_COUNT=$(grep -o "</div>" "$FILE" 2>/dev/null | wc -l | tr -d ' ')
      
      REL_PATH=$(echo "$FILE" | sed "s|$I18N_DIR/||")
      
      if [ "$OPEN_COUNT" -eq "$CLOSE_COUNT" ]; then
        BALANCED_FILES=$((BALANCED_FILES + 1))
        echo -e "    ${GREEN}✅${NC} $REL_PATH (${OPEN_COUNT} divs)"
      else
        UNBALANCED_FILES=$((UNBALANCED_FILES + 1))
        echo -e "    ${RED}❌${NC} $REL_PATH (${OPEN_COUNT} open, ${CLOSE_COUNT} close, diff: $((OPEN_COUNT - CLOSE_COUNT)))"
        
        # Check for validation logs
        LOG_FILE="${FILE%.md}.validation.log"
        if [ -f "$LOG_FILE" ]; then
          echo -e "       ${YELLOW}📋 Validation log exists${NC}"
        fi
      fi
    done
    echo ""
  done
done

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Summary:"
echo "   Total files checked: $TOTAL_FILES"
echo -e "   ${GREEN}Balanced: $BALANCED_FILES${NC}"
if [ $UNBALANCED_FILES -gt 0 ]; then
  echo -e "   ${RED}Unbalanced: $UNBALANCED_FILES${NC}"
else
  echo -e "   ${GREEN}Unbalanced: $UNBALANCED_FILES${NC}"
fi

# Check for validation logs
VALIDATION_LOGS=$(find packages -name "*.validation.log" 2>/dev/null | wc -l | tr -d ' ')
if [ "$VALIDATION_LOGS" -gt 0 ]; then
  echo ""
  echo -e "${YELLOW}⚠️  Found $VALIDATION_LOGS validation log(s):${NC}"
  find packages -name "*.validation.log" 2>/dev/null | while read -r log; do
    echo "   - $log"
  done
  echo ""
  echo "💡 To clean up logs: find packages -name '*.validation.log' -delete"
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $UNBALANCED_FILES -gt 0 ]; then
  exit 1
else
  exit 0
fi
