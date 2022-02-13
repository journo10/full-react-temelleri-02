import { useFormik } from "formik";
import validationSchema from "./validations"//diğer kullanımı 
//import validation from "./validations"; =>import'u bu şekilde kullnacaksan aşğıda bu şekil olmalı => validationSchema:validation

function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: {
                email: "",//İnputtaki name key ile aynı olmalı
                password: "",//İnputtaki name key ile aynı olmalı
                passwordConfirm: "",//İnputtaki name key ile aynı olmalı
            },
            onSubmit: (values) => {
                console.log(values);
            },
            validationSchema
        });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}//inputtan ayrılınca valid uyarısı vermesi için
                />

                {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                )}

                <br />
                <br />

                <label>Password</label>
                <input
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}//inputtan ayrılınca valid uyarısı vermesi için
                />

                {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                )}

                <br />
                <br />

                <label>Confirm Password</label>
                <input
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}//inputtan ayrılınca valid uyarısı vermesi için
                />

                {errors.passwordConfirm && touched.passwordConfirm && (
                    <div className="error">{errors.passwordConfirm}</div>
                )}

                <br />
                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    );
}

export default Signup;
