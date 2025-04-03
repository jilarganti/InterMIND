import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"id/chat.md","filePath":"i18n/id/chat.md"}');
const __default__ = { name: "id/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // Layanan Bisnis (blok pertama)
      { id: "1", text: "Pendaftaran perusahaan di UAE", category: "business" },
      { id: "2", text: "Pendirian perusahaan Mainland", category: "business" },
      { id: "3", text: "Pendaftaran perusahaan Free zone", category: "business" },
      { id: "4", text: "Pembentukan perusahaan Offshore", category: "business" },
      { id: "5", text: "Visa freelance UAE", category: "business" },
      { id: "6", text: "Lisensi bisnis Dubai", category: "business" },
      { id: "7", text: "Persyaratan lisensi dagang UAE", category: "business" },
      { id: "23", text: "Pendirian bisnis UAE", category: "business" },
      { id: "24", text: "Free zones Dubai", category: "business" },
      { id: "25", text: "Pendaftaran perusahaan UAE", category: "business" },
      { id: "26", text: "Visa freelance UAE", category: "business" },
      // Visa dan Imigrasi
      { id: "8", text: "Pengajuan Golden Visa UAE", category: "visa" },
      { id: "9", text: "Visa kerja UAE", category: "visa" },
      { id: "10", text: "Sponsor visa keluarga di UAE", category: "visa" },
      { id: "11", text: "Persyaratan tes medis visa", category: "visa" },
      { id: "12", text: "Proses visa tinggal UAE", category: "visa" },
      { id: "27", text: "Persyaratan visa UAE", category: "visa" },
      // Hukum dan Dokumen
      { id: "13", text: "Pengajuan Emirates ID", category: "legal" },
      { id: "14", text: "Legalisasi dokumen UAE", category: "legal" },
      { id: "15", text: "Surat Kuasa di UAE", category: "legal" },
      { id: "16", text: "Peninjauan kontrak bisnis UAE", category: "legal" },
      { id: "40", text: "Perpanjangan Emirates ID", category: "legal" },
      // Layanan Keuangan
      { id: "17", text: "Rekening bank korporat UAE", category: "finance" },
      { id: "18", text: "Pendaftaran pajak UAE (VAT)", category: "finance" },
      { id: "19", text: "Layanan akuntansi di UAE", category: "finance" },
      { id: "20", text: "Peraturan Substansi Ekonomi UAE", category: "finance" },
      { id: "41", text: "Layanan perbankan UAE", category: "finance" },
      // Properti dan Layanan
      { id: "21", text: "Investasi properti UAE", category: "property" },
      { id: "22", text: "Sewa ruang kantor Dubai", category: "property" },
      // Kesehatan
      { id: "47", text: "Asuransi kesehatan UAE", category: "healthcare" },
      { id: "48", text: "Rumah sakit terbaik di Dubai", category: "healthcare" },
      { id: "49", text: "Pemeriksaan kesehatan UAE", category: "healthcare" },
      // Pariwisata dan Hiburan (di akhir)
      { id: "28", text: "Objek wisata Dubai", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Tiket Dubai Frame", category: "attractions" },
      { id: "31", text: "Tiket Burj Khalifa", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Belanja di Dubai Mall", category: "shopping" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AIChat = resolveComponent("AIChat");
      const _component_userStyle = resolveComponent("userStyle");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AIChat, { prompts: chatPrompts }, null, _parent));
      _push(ssrRenderComponent(_component_userStyle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Normal`);
          } else {
            return [
              createTextVNode("Normal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/id/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
