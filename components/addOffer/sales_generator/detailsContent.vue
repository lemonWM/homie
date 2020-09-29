<template>
    <div class="item-new">
        <div class="col-wrap">
            <label for="price">Price: </label>
            <input type="numebr" id="price" class="input-sels" placeholder="Value of place in $">
        </div>
        <div class="col-wrap">
            <label for="bedrooms">Bedrooms: </label>
            <input type="numebr" id="bedrooms" class="input-sels" placeholder="Select number of rooms">
        </div>
        <div class="col-wrap">
            <label for="bathrooms">Bathrooms: </label>
            <input type="numebr" id="bathrooms" class="input-sels" placeholder="Select number of bathrooms">
        </div>
        <div class="col-wrap">
            <label for="kitchen">Kitchens: </label>
            <input type="numebr" id="kitchen" class="input-sels" placeholder="Select number of kitchens">
        </div>
        <div class="col-wrap">
            <label for="garage">Garage: </label>
            <input type="numebr" id="garage" class="input-sels" placeholder="Select number of rooms">        
        </div>
        <div class="col-wrap">
            <label for="area">Total area: </label>
            <input type="numebr" id="area" class="input-sels" placeholder="Ft value area">        
        </div>
        <div>
            <label for="garage">Describe: </label>
            <textarea name="" id="garage" cols="30" rows="5" class="input-sels" placeholder="Tell the story of the place"></textarea> 
        </div>
        <button class=" hollow">Confirm all</button>
    </div>
</template>

<script>
export default {
    name: 'details-content'
}
</script>