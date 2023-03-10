import { defineConfig } from 'vitepress';
import axios from 'axios';

var globalConfig = '';

export default defineConfig({
	lang: 'zh-CN',
	base: '/lzy-web-template/',
	appearance: true,
	title: globalConfig || '前端技术',
	description: 'VitePress is a Vite-powered static site generator',
	ignoreDeadLinks: true,
	lastUpdated: true,
	markdown: {
		theme: 'one-dark-pro',
		lineNumbers: true,
	},
	themeConfig: {
		siteTitle: globalConfig || '前端技术',
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2012-present LZY',
		},
		nav: [
			{
				text: '首页',
				link: '/',
			},
			{
				text: '人民日报金句摘抄',
				link: '/daily/',
			},
			{
				text: '每日一句',
				link: '/sentence-day/',
			},
			{
				text: '关于',
				link: '/about/',
			},
			{
				text: '必读书籍必听音乐',
				link: '/song/',
			},
			{
				text: '食品添加剂',
				link: '/additive/',
			},
		],
		sidebar: {
			'/daily/': [
				{
					text: '诗句及感悟',
					collapsible: true,
					collapsed: true,
					items: [
						{
							text: '诗词等',
							link: '/daily/',
						},
						{
							text: '感悟',
							link: '/daily/感悟',
						},
					],
				},
			],
			'/sentence-day/': [
				{
					text: '每日一句',
					collapsible: true,
					collapsed: true,
					items: [
						{
							text: '英语',
							link: '/sentence-day/',
						},
					],
				},
			],
			'/song/': [
				{
					text: '必看必读',
					collapsible: true,
					collapsed: true,
					items: [
						{
							text: '歌单',
							link: '/song/',
						},
						{
							text: '书籍',
							link: '/song/book',
						},
						{
							text: '摄影入门',
							link: '/song/相机',
						},
						{
							text: '旅游攻略',
							link: '/song/旅游攻略',
						},
					],
				},
			],
		},
	},
});
