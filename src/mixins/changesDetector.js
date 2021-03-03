const mixinChangesDetector = {
  data: () => {
    return {
      initialObject: {}
    }
  },

  methods: {
    $_mixinChangesDetector_storeInitial (object) {
      this.initialObject = JSON.stringify(object)
    },
    $_mixinChangesDetector_hasChanged (newObject) {
      return JSON.stringify(newObject) !== this.initialObject
    }
  }
}

export default mixinChangesDetector
