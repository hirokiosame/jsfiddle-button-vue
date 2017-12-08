<template>
	<form method="post" target="_blank" action="http://jsfiddle.net/api/post/library/pure/">
		<template v-for="prop in props">
			<input
				v-if="getProp(prop)"
				type="hidden"
				:name="prop"
				:value="getProp(prop)"
			>
		</template>
		ass
		<button :class="$s.openButton">
			<JsfiddleSVG :class="$s.logo" />
			Open in JSFiddle
		</button>
	</form>
</template>

<script>
import JsfiddleSVG from './jsfiddlesvg.vue';

export default {

	name: 'JsfiddleButton',

	components: {
		JsfiddleSVG,
	},

	props: {
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		resources: {
			type: Array,
		},
		js: {
			type: String,
		},
		html: {
			type: String,
		},
		css: {
			type: String,
		},
		wrap: {
			type: String,
		},
	},

	data() {
		return {
			props: [
				'title',
				'description',
				'resources',
				'js',
				'html',
				'css',
				'wrap'
			],
		};
	},

	// computed: {
	// 	resourcesStr() {
	// 		return (this.resources instanceof Array) ? this.resources.join(',') : '';
	// 	},
	// },

	methods: {
		getProp(prop) {
			return this[prop];
		},
	},
};
</script>

<style module="$s">

.logo {
	width: 32px;
	height: 32px;
	vertical-align: middle;
}

.openButton {
    color: #39464E;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
	padding: 0 8px;
	margin: 0;
	border: none;
	border-bottom: solid 2px transparent;
	border-radius: 0;
	cursor: pointer;
}

.openButton:hover {
	border-bottom: solid 2px #1C90F3;
}

.openButton:focus {
	outline: none;
}

</style>