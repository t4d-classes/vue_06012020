<template>

  <div>
    <form @submit.prevent>

      <div>
        <label>Check Me!</label>
        <input type="checkbox" v-model="checkMe">
      </div>
      <div>
        <label>Check as Many as You Like!</label>
        
        <label><input type="checkbox" value="Cream" v-model="checkOptions"> Cream</label>
        <label><input type="checkbox" value="Sugar" v-model="checkOptions"> Sugar</label>
        <label><input type="checkbox" value="Honey" v-model="checkOptions"> Honey</label>
        <label><input type="checkbox" value="Nutmeg" v-model="checkOptions"> Nutmeg</label>
      </div>
      
      <fieldset>
        <legend>Select a Drink</legend>
        <label><input type="radio" name="drinkType" value="Coffee" v-model="drinkType"> Coffee</label>
        <label><input type="radio" name="drinkType" value="Tea" v-model="drinkType"> Tea</label>
        <label><input type="radio" name="drinkType" value="Milk" v-model="drinkType"> Milk</label>
        <label><input type="radio" name="drinkType" value="Energy Drink" v-model="drinkType"> Energy Drink</label>
      </fieldset>

      <div>
        <label>
          Comments:
          <textarea rows="5" cols="60"
            v-model="comments" placeholder="I loved the coffees..."
            :style="{ verticalAlign: 'middle' }"></textarea>
        </label>
      </div>

      <div>
        <label>
          Select a Sandwich
          <select v-model="sandwich">
            <option value="-1" disabled>Select One...</option>
            <option v-for="so in sandwichOptions"
              :value="so.value" :key="so.value">
              {{so.caption}}
            </option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Select a Sandwich 2
          <select style="vertical-align:middle" v-model="sandwich2" size="5" multiple>
            <option v-for="so in sandwichOptions"
              :value="so.value" :key="so.value">
              {{so.caption}}
            </option>
          </select>
        </label>
      </div>

    </form>
    <div>
      <h2>Form Output</h2>
      <ul>
        <li>Check Me: {{checkMe}}</li>
        <li>Check Options: {{checkOptions}}</li>
        <li>Drink Type: {{drinkType}}</li>
        <li>Comments: {{comments}}</li>
        <li>Sandwich: {{sandwich}}</li>
        <li>Sandwich2: {{sandwich2}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      checkMe: false,
      checkOptions: [],
      drinkType: 'Coffee',
      comments: '',
      sandwichOptions: [
        { value: 'roast beef', caption: 'Roast Beef' },
        { value: 'chicken', caption: 'Chicken' },
        { value: 'turkey', caption: 'Turkey' },
        { value: 'blt', caption: 'BLT' },
      ],
      sandwich: '',
      sandwich2: [],
    };
  },
  methods: {
  }
}
</script>

<style>
</style>
