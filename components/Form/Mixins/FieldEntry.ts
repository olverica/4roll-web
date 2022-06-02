import {PropType} from 'vue'

export default {
  props: {
    placeholder: {
      default: '',
      type: String as PropType<string>
    },

    entry: {
      default: '',
      type: String as PropType<string>
    },

    focused: {
      default: false,
      type: Boolean as PropType<boolean>
    }
  },

  computed: {
    tag(): string {
      return this.multilined ? 'p' : 'input'
    }
  },

  watch: {
    focused(shouldFocus: boolean): void {
      if (shouldFocus)
        this.$el.focus();
      else 
        this.$el.blur()
    }
  },

  mounted() {
    this.setValue(this.entry);
  },

  methods: {
    onBeforeInput(event: InputEvent): void {
      if (event.data && !!!this.validate(event.data))
        event.preventDefault();
    },

    onInput(): void {
      this.$emit('update:entry', this.getValue());
    },

    onFocus(): void {
      this.$emit('update:focused', true);
    },

    onBlur(): void {
      this.$emit('update:focused', false);
    },

    setValue(value: string): void {
      //
    },

    getValue(): string {
      return ''
    },

    validate(data: string): boolean {
      return true;
    }
  }
}