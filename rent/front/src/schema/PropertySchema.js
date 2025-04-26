import * as YUP from 'yup'

let PropertySchema = YUP.object({
    title : YUP.string().required("Insert Property Title"),
    address : YUP.string().required("Insert Property Address"),
    property_type : YUP.string().required("Select Property Type"),
    image : YUP.string().required("Select Property Image"),
    rent : YUP.number().typeError("Insert Numbers only").required("Insert Property Rent"),
    advance_money : YUP.number().typeError("Insert Numbers only").required("Insert Advance Money Amount for...."),
})

export default PropertySchema