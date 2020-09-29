<template>
    <div class="item-new">
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
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'details'
}
</script>