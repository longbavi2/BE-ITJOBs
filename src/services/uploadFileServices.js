const path = require('path');
const uploadSingleFileApi = async (file) => {
    let uploadPath = 'D:/backend_mongoose/Backend/src/public/images/' + file.name;
    try {
        let result = await file.mv(uploadPath)
        return result
    } catch (error) {
        return {
            errorCode: true,
            result: error
        }
    }
}
const uploadSingleToMultipleFileApi = async (file) => {
    const arr = [];
    const files = file.length > 1 ? [...file] : [file]
    let arrPromise = files.map((item) => {
        const uploadPath = path.resolve(__dirname, '../public/images/uploads/ ')
        //ham lấy phần .png
        const extname = path.extname(item.name)
        // lấy tên ban đầu
        const baseName = path.basename(item.name, extname)
        const timeNow = Date.now()
        let uploadPathFile = `${uploadPath}${baseName} - ${timeNow}${extname}`
        return new Promise((resolve, reject) => {
            item.mv(uploadPathFile, (err) => {
                if (err) {
                    reject(
                        {
                            status: "Failed",
                            path: `${baseName} - ${timeNow}${extname}`,
                            error: JSON.stringify(err)
                        }
                    )
                } else {
                    resolve(
                        {
                            status: "Success",
                            path: `${baseName} - ${timeNow}${extname}`,
                            error: null
                        })
                }
            })
        });
    })
    let result = await Promise.all(arrPromise);
    return result
}
module.exports = {
    uploadSingleFileApi, uploadSingleToMultipleFileApi
}