<template>
  <div>
    <div class="form-group">
      <label>Source Language</label>
      <select v-model="source">
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
        <option>German</option>
      </select>
      <input v-model="inputText" type="text" class="form-control" placeholder="What would you like to translate?">
    </div>
    <div class="form-group">
      <label>Target Language</label>
      <select v-model="target">
        <option>German</option>
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
      </select>
      <input  v-model="outputText" type="text" class="form-control" placeholder="Result">
    </div>
    <button class="btn btn-primary" @click="translate">Translate</button>
  </div>
</template>
<script>
let LanguageAbbreaves={
    'German':'de',
    'Enlish':'en',
    'Spanish':'sp',
    'French':'fr'
}
export default {
  data: function() {
    return {
      source: "English",
      target: "German",
      inputText:"",
      outputText:""
    };
  },
  methods: {
    translate() {
        this.$http.post('http://localhost:8081/translate',
            {
                text: this.inputText,
                source: LanguageAbbreaves[source],
                target: LanguageAbbreaves[target]
            })
            .then(r=>{
                return r.json();
            })
            .then(data=>this.outputText = data.result)
    }
  },
  computed: {}
};
</script>