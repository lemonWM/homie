<template>
    <div class="item-new">
        <input type="file" 
            accept="image/png, image/jpeg, image/bmp"
            ref="file"
            @change="handleFileUpload()"
            class="input-sels"
            >
        <button class="btn btn-primary" 
            @click="uploadImg" 
            >
             <i class="fa fa-cloud-upload-alt"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'photos',
    data() {
        return {
            imageData: '',
            logoUrl:''
        }
    },
    methods: {
        
        uploadImg(){
            
            let formData = new FormData()

            formData.append('file', this.imageData)

            this.$axios.post(this.$axios.defaults.baseURL+'/upload_img', 
                formData,
                {headers: 
                    {"Content-Type": "multipart/form-data"}
                }
            )
            .then(({ data }) => {
                
                let logoUrl = data.url
            })
            .catch(({ err }) => {
                console.log(err)
            })
        },
        handleFileUpload(){

            this.imageData = this.$refs.file.files[0]
        
            console.log(this.imageData)
        }, 
    },
}
</script>