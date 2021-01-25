<template>
	<b-card>
		<bui-form-group
			label="Label"
			help="Help text">
			<b-form-input
				type="text"
				value="Form input"
			></b-form-input>
		</bui-form-group>

		<bui-form-group
			label="Label"
			help="Help text">
			<b-form-textarea
				required
				value="Textarea"
				rows="3"
			></b-form-textarea>
		</bui-form-group>

		<bui-form-group label="Search">
			<b-form-input type="search"></b-form-input>
		</bui-form-group>

		<bui-form-group label="Switches" required help="oi!!!!">
			<b-form-checkbox switch :checked="true">
				<label> Switch </label>
			</b-form-checkbox>
			<b-form-checkbox switch class="bui-switch-success" :checked="true">
				<label> Switch </label>
			</b-form-checkbox>
			<b-form-checkbox class="bui-checkbox-rounded" :checked="true">
				<label> Checkbox rounded </label>
			</b-form-checkbox>
		</bui-form-group>

		<b-form-checkbox class="bui-checkbox-boxed bui-checkbox-rounded" size="lg" :checked="true" id="boxed">
			<label for="boxed">Checkbox boxed e rounded</label>
			<bui-icon name="info" :size="18" v-b-tooltip.hover="'Tooltipzão'"></bui-icon>
		</b-form-checkbox>
	</b-card>
</template>