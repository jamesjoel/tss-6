import * as YUP from 'yup'

let PropertySchema = YUP.object({
    title : YUP.string().required("Insert Property Title"),
    address : YUP.string().required("Insert Property Address"),
    property_type : YUP.string().required("Select Property Type"),
    rent : YUP.number().typeError("Insert Numbers only").required("Insert Property Rent"),
})

export default PropertySchema