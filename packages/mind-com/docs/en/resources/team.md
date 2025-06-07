<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { Icon } from "@iconify/vue";
import claudeSvg from '/svg/claude.svg?raw'
import openAiSvg from '/svg/open-ai.svg?raw'
// import spinerSvg from '/svg/svg-spinners:bouncing-ball-4.svg?raw'

const members = [
	{
    avatar: 'https://www.github.com/jilarganti.png',
    name: 'Jil Arganti',
    title: 'Mind core team',
    links: [
			{ icon: 'github', link: 'https://github.com/jilarganti' },
			{ icon: 'linkedin', link: 'https://www.linkedin.com/in/aleksey-korolev/' }
    ]
	},
	{
		avatar: '/favicon.svg',
		name: 'Alexander',
		title: 'Mind core team',
		links: [
			{ icon: 'gitlab', link: 'https://gitlab.com/alexander.strikhalev' },
		]
	},
	{
    avatar: '/svg/svg-spinners:bouncing-ball-4.svg',
    name: 'Claude',
    title: 'AI agents',
    links: [
			{
        icon: { svg: claudeSvg },
        link: 'https://www.anthropic.com/solutions/agents',
				ariaLabel: 'Claude AI agents'
      }
    ]
	},
	// {
  //   avatar: '/svg/svg-spinners:bouncing-ball-3.75.svg',
  //   name: 'OpenAI',
  //   title: 'AI agents',
  //   links: [
	// 		{
  //       icon: { svg: openAiSvg },
  //       link: 'https://www.anthropic.com/solutions/agents',
	// 			ariaLabel: 'OpenAI AI agents'
  //     }
  //   ]
	// },
	// {
  //   avatar: '/svg/svg-spinners:bouncing-ball-3.5.svg',
  //   name: 'Gemini',
  //   title: 'AI agents',
  //   links: [
	// 		{
  //       icon: { svg: spinerSvg },
  //       link: 'https://www.anthropic.com/solutions/agents',
	// 			ariaLabel: 'OpenAI AI agents'
  //     }
  //   ]
	// },
]
</script>

# Meet the Team

The development of InterMIND is guided by an international team, some of whom have chosen to be featured below.

<VPTeamMembers size="small" :members />
