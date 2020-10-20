// file type validations using formik and yup in react

const FILE_SIZE = "20";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

filename: Yup.mixed()
  .test(
    "fileSize",
    "File Size is too large",
    (value) => value.size <= FILE_SIZE
  )
  .test("fileType", "Unsupported File Format", (value) =>
    SUPPORTED_FORMATS.includes(value.type)
  );
