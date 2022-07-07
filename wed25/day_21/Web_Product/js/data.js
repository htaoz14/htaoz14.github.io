// danh sách sản phẩm
let products = [
    {
        id : 1,
        name : "Sản phẩm 1",
        images : [
            "https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393",
            "https://media.istockphoto.com/id/1320950379/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-c%E1%BB%A7a-m%E1%BB%99t-chi%E1%BA%BFc-xe-tr%C3%AAn-d%C3%A2y-chuy%E1%BB%81n-h%C3%A0n-robot.webp?s=612x612&w=is&k=20&c=rXUjKZvrQcgoM6gMGFQzq9JJh65vCjdx9Zh3AfIxGgY=",
            "https://media.istockphoto.com/photos/interior-of-a-vehicle-manufacturing-factory-in-3d-render-picture-id1320950409?k=20&m=1320950409&s=612x612&w=0&h=0ecVRZ4MSqXmtNOiW_wzL9PfOv3TsIEKKfMvz3Tso0g=",
             "https://media.istockphoto.com/photos/production-of-metal-components-in-a-foundry-equipment-and-of-a-picture-id1031397544?k=20&m=1031397544&s=612x612&w=0&h=Za284K0oxY4ktpwbu5IkXMkrWbsjxCEhUKuzNvVuEtc="
        ],
        price : 1000000000,
        rating : 5,
        sizes : ["M","L","XL"],
        description : "mô tả 1"

    },
    {
        id : 2,
        name : "Sản phẩm 2",
        images : [
            "https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393",
            "https://media.istockphoto.com/id/1320950379/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-c%E1%BB%A7a-m%E1%BB%99t-chi%E1%BA%BFc-xe-tr%C3%AAn-d%C3%A2y-chuy%E1%BB%81n-h%C3%A0n-robot.webp?s=612x612&w=is&k=20&c=rXUjKZvrQcgoM6gMGFQzq9JJh65vCjdx9Zh3AfIxGgY=",
            "https://media.istockphoto.com/photos/interior-of-a-vehicle-manufacturing-factory-in-3d-render-picture-id1320950409?k=20&m=1320950409&s=612x612&w=0&h=0ecVRZ4MSqXmtNOiW_wzL9PfOv3TsIEKKfMvz3Tso0g=",

        ],
        price : 1000000000,
        rating : 5,
        sizes : ["M","10XL","XL"],
        description : "mô tả 2"
    }
    ,{
        id : 3,
        name : "Sản phẩm 3",
        images : [
            "https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393",
            "https://media.istockphoto.com/id/1320950379/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-c%E1%BB%A7a-m%E1%BB%99t-chi%E1%BA%BFc-xe-tr%C3%AAn-d%C3%A2y-chuy%E1%BB%81n-h%C3%A0n-robot.webp?s=612x612&w=is&k=20&c=rXUjKZvrQcgoM6gMGFQzq9JJh65vCjdx9Zh3AfIxGgY=",
            "https://media.istockphoto.com/photos/interior-of-a-vehicle-manufacturing-factory-in-3d-render-picture-id1320950409?k=20&m=1320950409&s=612x612&w=0&h=0ecVRZ4MSqXmtNOiW_wzL9PfOv3TsIEKKfMvz3Tso0g=",

        ],
        price : 1000000000,
        rating : 5,
        sizes : ["M","S","XL"],
        description : "mô tả 3"
    },
    {
        id : 4,
        name : "Sản phẩm 4 ",
        images : [
            "https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393",
            "https://media.istockphoto.com/id/1320950379/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-c%E1%BB%A7a-m%E1%BB%99t-chi%E1%BA%BFc-xe-tr%C3%AAn-d%C3%A2y-chuy%E1%BB%81n-h%C3%A0n-robot.webp?s=612x612&w=is&k=20&c=rXUjKZvrQcgoM6gMGFQzq9JJh65vCjdx9Zh3AfIxGgY=",
            "https://media.istockphoto.com/photos/interior-of-a-vehicle-manufacturing-factory-in-3d-render-picture-id1320950409?k=20&m=1320950409&s=612x612&w=0&h=0ecVRZ4MSqXmtNOiW_wzL9PfOv3TsIEKKfMvz3Tso0g=",
             "https://media.istockphoto.com/photos/locomotive-production-at-the-factory-picture-id1201182001?k=20&m=1201182001&s=612x612&w=0&h=cMEma_UfVwPurnkkjiGicwcC2S9nuoxHSYSiNFMqlHI="
        ],
        price : 1000000000,
        rating : 5,
        sizes : ["M","2XL","XL"],
        description : "mô tả 4"
    },
    {
        id : 5,
        name : "Sản phẩm 5",
        images : [
            "https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393",
            "https://media.istockphoto.com/id/1320950379/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-c%E1%BB%A7a-m%E1%BB%99t-chi%E1%BA%BFc-xe-tr%C3%AAn-d%C3%A2y-chuy%E1%BB%81n-h%C3%A0n-robot.webp?s=612x612&w=is&k=20&c=rXUjKZvrQcgoM6gMGFQzq9JJh65vCjdx9Zh3AfIxGgY=",
            "https://media.istockphoto.com/photos/interior-of-a-vehicle-manufacturing-factory-in-3d-render-picture-id1320950409?k=20&m=1320950409&s=612x612&w=0&h=0ecVRZ4MSqXmtNOiW_wzL9PfOv3TsIEKKfMvz3Tso0g=",
            "https://media.istockphoto.com/photos/locomotive-production-at-the-factory-picture-id1201182001?k=20&m=1201182001&s=612x612&w=0&h=cMEma_UfVwPurnkkjiGicwcC2S9nuoxHSYSiNFMqlHI="

        ],
        price : 1000000000,
        rating : 5,
        sizes : ["M","4XL","XL"],
        description : "mô tả 6"
    },
    {
        id : 6,
        name : "Sản phẩm 6",
        images : [
            "https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393",
            "https://media.istockphoto.com/id/1320950379/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-c%E1%BB%A7a-m%E1%BB%99t-chi%E1%BA%BFc-xe-tr%C3%AAn-d%C3%A2y-chuy%E1%BB%81n-h%C3%A0n-robot.webp?s=612x612&w=is&k=20&c=rXUjKZvrQcgoM6gMGFQzq9JJh65vCjdx9Zh3AfIxGgY=",
            "https://media.istockphoto.com/photos/interior-of-a-vehicle-manufacturing-factory-in-3d-render-picture-id1320950409?k=20&m=1320950409&s=612x612&w=0&h=0ecVRZ4MSqXmtNOiW_wzL9PfOv3TsIEKKfMvz3Tso0g=",

        ],
        price : 1000000000,
        rating : 5,
        sizes : ["M","S","XL"],
        description : "mô tả 6"
    }
]
