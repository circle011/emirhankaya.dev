import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Can Itriyat',
		url: 'Can-Itriyat',
		category: 'Web Sitesi',
		img: '/images/canitriyat.png',
		ProjectHeader: {
			title: 'Can Itriyat',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/canitriyat/canitriyat1.png',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/canitriyat/canitriyat2.png',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/canitriyat/canitriyat3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Proje Hakkında',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://www.canitriyat.com/',
				},

			],
			ObjectivesHeading: 'Proje',
			ObjectivesDetails:
				'Can Itriyat projesi benim ilk Freelance işimdir. Proje React Js ile yapılmıştır.',
			Technologies: [
				{
					title: 'Teknolojiler',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React.js',
						'Sass.CSS',
					],
				},
			],
			ProjectDetailsHeading: '',
			ProjectDetails: [

			],
			SocialSharingHeading: '',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'Kripto App',
		url: 'Kripto APİ',
		category: 'Web Application',
		img: '/images/kripto (1).png',
		ProjectHeader: {
			title: 'Kripto App',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kripto App',
				img: '/images/bitcoin/bitcoin.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kripto App',
				img: '/images/bitcoin/bitcoin2.png',
			},
			{
				id: uuidv4(),
				title: 'Kripto App',
				img: '/images/bitcoin/bitcoin3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Proje Hakkında',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://github.com/circle011/Crypto-app',
				},

			],
			ObjectivesHeading: 'Proje',
			ObjectivesDetails:
				'APİ kullanarak Crypto React projesi geliştirdim. Projenin kodlarına yukarıdaki linkten ulaşabilirsiniz',
			Technologies: [
				{
					title: 'Teknolojier',
					techs: [
						'JavaScript',
						'React.js',
					],
				},
			],
			ProjectDetailsHeading: '',
			ProjectDetails: [

			],
			SocialSharingHeading: '',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: 'React Blog',
		url: 'React-blog',
		category: 'Firebase',
		img: '/images/fireblog.png',
		ProjectHeader: {
			title: 'ReactJS Blog',
			publishDate: 'Jul 26, 2021',
			tags: 'Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Firebase Blog App',
				img: '/images/firebase/blog.jpg',
			},
			{
				id: uuidv4(),
				title: 'Firebase Blog App',
				img: '/images/firebase/blog2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Firebase Blog App',
				img: '/images/firebase/blog4.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Proje Hakkında',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Firebase & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://github.com/circle011/React-Firebase-Blog-App',
				},

			],
			ObjectivesHeading: 'Proje',
			ObjectivesDetails:
				'ReactJS ve Firebase kullanarak Blog-app geliştirdim. Firebase servisinde Authentication kullanarak sign-in işlemi Email/password ile admin girişi sağlanabilir. kodlarına Yukarıdaki linkten  Github sayfama ulaşabilir ve inceyebilirsiniz.',
			Technologies: [
				{
					title: 'Teknolojiler',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'ReactJs',
						'Firebase'

					],
				},
			],
			ProjectDetailsHeading: '',
			ProjectDetails: [

			],
			SocialSharingHeading: '',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: 'Hava Durumu Uygulaması',
		url: 'Hava-Durumu-Uygulaması',
		category: 'Web Uygulama',
		img: '/images/weathe.png',
		ProjectHeader: {
			title: 'Hava Durumu Uygulaması',
			publishDate: 'Jul 26, 2021',
			tags: 'Web & API',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Hava Durumu Uygulaması',
				img: '/images/weathe.png',
			},

		],
		ProjectInfo: {
			ClientHeading: 'Proje Hakkında',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://github.com/circle011/Weather-app',
				},
			],
			ObjectivesHeading: 'Proje',
			ObjectivesDetails:
				'OpenWeatherMap API kullanarak ReactJS ile birlikte Hava Durumu uygulaması yaptım. Hava Durumu Uygulamasında inputa girilen şehirin anlık olarak kaç derece, nem , hissedilen, değerleri öne çıkartıyor.',
			Technologies: [
				{
					title: 'Teknolojiler',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'ReactJS'
					],
				},
			],
			ProjectDetailsHeading: '',
			ProjectDetails: [

			],
			SocialSharingHeading: '',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 5,
		title: 'PHP Blog Web Sitesi',
		url: 'Blog-app',
		category: 'Web Site',
		img: '/images/php.png',
		ProjectHeader: {
			title: 'PHP Blog Web Sitesi',
			publishDate: 'Jul 26, 2021',
			tags: 'Backend / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'PHP Blog Sitesi',
				img: '/images/php.png',
			},

		],
		ProjectInfo: {
			ClientHeading: 'Proje Hakkında',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Backend & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://github.com/circle011/PHP-BLog-',
				},
			],
			ObjectivesHeading: 'Proje',
			ObjectivesDetails:
				'PHP ile MVC yapısına uygun bir blog sitesi yaptım. Admin panali olan mysql veri tabanlı bir uygulamadır. Kodları yukarıdaki linkten inceleyebilirsainiz.',
			Technologies: [
				{
					title: 'Teknolojiler',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Php'
					],
				},
			],
			ProjectDetailsHeading: "",
			ProjectDetails: [

			],
			SocialSharingHeading: '',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/realstoman',
			// 	},
			// ],
		},
	},
	
];
