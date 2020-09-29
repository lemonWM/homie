<template>
    <div class="item-new">
        <label for="upload">Upload images</label>
        <input type="file" 
            accept="image/png, image/jpeg, image/bmp"
            ref="file"
            @change="handleFileUpload()"
            class="input-sels"
            id="upload"
            multiple="multiple"
            name='uploadedImages'
            >
        <button class="" 
            @click="uploadImg" 
            >
             <i class="fa fa-cloud-upload-alt"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'photos-content',
    data() {
        return {
            imageData: [],
            logoUrl:''
        }
    },
    methods: {
        
        uploadImg(){
            
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
                console.log(data)
                let logoUrl = data.url
            })
            .catch(({ err }) => {
                console.log(err)
            })
        },
        handleFileUpload(){

            for(let i =0; i < this.$refs.file.files.length; i++){

                this.imageData.push(this.$refs.file.files[i])
            }
        }, 
    },
}
</script>