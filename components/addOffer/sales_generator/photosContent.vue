<template>
    <div class="item-new ">
        <div v-if="!uploaded">
            <label for="upload">Upload images</label>
            <input type="file" 
                accept="image/png, image/jpeg, image/bmp"
                ref="file"
                @click="resetImg"
                @change="handleFileUpload()"
                class="input-sels"
                id="upload"
                multiple="multiple"
                name='uploadedImages'
                >
            <button class="" 
                @click="uploadImg" 
                :disabled='!imageData.length'
                >
                <i class="fa fa-cloud-upload-alt"></i>
            </button>
        </div>

        <div class="uploaded-img-wrapper preview-details " v-if="uploaded">
            <div class="details-photo-preview">
                <div v-for="(img, index) in uploadedURL">
                    <img :src="img" alt="" class="img-uploaded">
                </div>
            </div>

            <button class="hollow button-generate" @click="uploaded =! uploaded">Edit photos</button>
        </div>

        <div class="img-preloader " v-if="onUpload">
            <div>
                <p class="loader-title">Wait for upload..</p>
                <div class="loading loading-lg"></div>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'photos-content',
    data() {
        return {
            imageData: [],
            uploadedURL: [],
            onUpload: false,
            uploaded: false
        }
    },
    methods: {
        
        uploadImg(){

            this.onUpload = true
            
            let formData = new FormData()

            for(let i = 0; i < this.imageData.length; i++){

                formData.append('file', this.imageData[i])
            }

            this.$axios.post(this.$axios.defaults.baseURL+'/upload_img', 
                formData,
                {headers: 
                    {"Content-Type": "multipart/form-data"}
                }
            )
            .then(({ data }) => {
                
                this.uploadedURL = data.url

                this.onUpload = false

                this.imageData = []

                this.setImgStore(this.uploadedURL) // commit uploaded img url

                this.$emit('changePhotoStatus', true); 
            })
            .catch(({ err }) => {
                
                this.onUpload =false
            })
        },
        handleFileUpload(){

            for(let i =0; i < this.$refs.file.files.length; i++){

                this.imageData.push(this.$refs.file.files[i])
            }
        }, 
        resetImg(){
            
            this.imageData = []
        },
        setImgStore(photos){

            this.$store.commit('setImgNewSale',{
                photos: photos
            })
        }
    },
    watch: {
        
        uploadedURL(newVal){

            if(newVal){
                this.uploaded = true
            }
        }
    },
}
</script>