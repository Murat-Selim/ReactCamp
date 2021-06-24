import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Button} from 'semantic-ui-react'
import KodlamaioTextInput from "../utilities/customFormControls/KodlamaioTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Urun adi zorunlu"),
    unitPrice: Yup.number().required("Urun fiyati zorunludur"),
  });
  return (
    <div>
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit = {(values) => {
          console.log(values)
      }}
      >
        <Form className="ui form">
          <KodlamaioTextInput name="productName" placeholder="Urun Adi"/>
          <KodlamaioTextInput name="unitPrice" placeholder="Birim Fiyati"/>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
