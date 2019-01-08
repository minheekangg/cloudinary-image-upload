import React from 'react';

class App extends React.Component {

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dly4mslmg/upload'
const CLOUDINARY_UPLOAD_PRESET= 'hknbr8bn'

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(event){
    var file = event.target.files[0]
    var formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(res =>  {console.log(res)
    imgPreview.src = res.data.secure_url})
    .catch(err=> console.log(err))
})

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'my_cloud_name',
    uploadPreset: 'my_preset'
}, (error, result) => { console.log(error, result) })

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);

render () {
    return(
        <div>hello</div>
    )
}

}