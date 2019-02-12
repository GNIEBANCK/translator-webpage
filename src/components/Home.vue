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
      <input type="text" class="form-control" placeholder="What would you like to translate?">
    </div>
    <div class="form-group">
      <label>Target Language</label>
      <select v-model="target">
        <option>German</option>
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
      </select>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Result">
    </div>
    <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      source: "English",
      target: "German"
    };
  },
  methods: {
    submit() {
    }
  },
  computed: {}
};
</script>