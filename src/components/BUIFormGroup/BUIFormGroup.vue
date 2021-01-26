<template>
	<b-form-group ref="group" :invalid-feedback="error">
		<slot name="label">
			<label v-if="label">
				{{ label }}
				<span 
					class="bui-form-required"
					v-if="required">
					*
				</span>
				<bui-icon
					class="mx-2"
					v-if="help"
					name="info"
					:size="18"
					v-b-tooltip.hover
					:title="help"
				></bui-icon>
			</label>
		</slot>
		<slot></slot>
		<span
			class="bui-form-char-counter"
			v-if="value && maxChars"> 
			{{ countStrLength(value) }}
		</span>
	</b-form-group>
</template>

<script>

export default {

	name: 'bui-form-group',

	props: {
		/*
		 * Label do campo
		 */
		label: {
			type: String,
			required: false,
		},
		
		/*
		 * Texto de ajuda que aparece no tooltip
		 */
		help: {
			type: String,
			required: false
		},

		/*
		 * Se é required
		 */
		required: {
			type: Boolean,
			required: false,
			default: false,
		},

		/*
		 * Erros que o campo possui
		 */
		error: {
			type: String,
			required: false,
			default: ''
		},

		/*
		 * Número máximo de caracteres permitidos
		 */
		maxChars: {
			type: Number,
			default: null,
			required: false
		},

		/*
		 * Valor do campo.
		 * Necessário para limitar o maxChars
		 */
		value: {
			type: [Number, Object, String],
			required: false
		}
	},

	data() {
		return  {
			element: null
		}
	},

	async mounted() {

		await this.$refs.group.$children.forEach(element => {
			if (element.$el.tagName == 'INPUT' || element.$el.tagName == 'TEXTAREA') {
				this.element = element.$el
			}
		})

		if (this.element) {
			this.setInputMaxLength()
			if (this.error) {
				this.setInputErrorClass()
			}
		}
	},

	methods: {
		setInputMaxLength() {
			if (this.maxChars && this.element) {
				this.element.maxLength = this.maxChars
			}
		},

		setInputErrorClass() {
			if (this.element) {
				this.element.classList.add('is-invalid')
			}
		},

		removeInputErrorClass() {
			if (this.element) {
				this.element.classList.remove('is-invalid')
			}
		},

		countStrLength(str) {
			return (str != null ? str.length : 0) + '/' + this.maxChars
		}
	},

	watch: {
		error(val) {
			if (this.error) {
				this.setInputErrorClass()
			} else {
				this.removeInputErrorClass()
			}
		}
	}
}
</script>