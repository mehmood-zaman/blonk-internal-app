import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, notification } from 'antd';
import CompanyForm from '../partials/CompanyForm';
import PageTitle from '../../../../components/UI/PageTitle/PageTitle';
// import { useAddCompanyMutation } from "../../../graphql/generated/graphql";

const AddCompany: React.FC = () => {
  let history = useHistory();
  const [imageData, setImageData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadLogo, setUploadLogo] = useState({
    loading: false,
    url: 'http://blonk.co/demo/SOBlonk/assets/images/users/user-2.jpg',
    error: '',
  });
  const [companyData, setCompanyData] = useState(Object);
  // const [addCompanyMutation, { loading }] = useAddCompanyMutation();

  //handle if image is not changed
  const prevCountRef: any = useRef();
  useEffect(() => {
    prevCountRef.current = imageData;
  });
  const prevImageData = prevCountRef.current;

  // useEffect(() => {
  //   if (!uploadLogo.loading && Object.keys(companyData).length !== 0) {
  //     const url: string = uploadLogo.url;
  //     addCompanyMutation({
  //       variables: {
  //         ...companyData,
  //         logo: url,
  //       },
  //     })
  //       .then(({ data }) => {
  //         notification["success"]({
  //           message: "Company registered successfully.",
  //           onClose: () =>
  //             history.push(`/companies/view/${data?.registerCompany?._id}`),
  //           description:
  //             "Your Company has been created. You will be redirected to the Company page.",
  //         });
  //       })
  //       .catch((err) => {
  //         const errors = err.graphQLErrors.map((el: any) => el.message);
  //         notification["error"]({
  //           message: "Unable to create company",
  //           description: errors.map((er: any) => <div key={er}>{er}</div>),
  //           duration: 3,
  //           onClose: () => setHasError(false),
  //         });
  //       });
  //   }
  // }, [uploadLogo.loading, companyData]);

  const onUploadCompanyLogo = (data: any) => {
    const formData = new FormData();
    // Update the formData object
    setUploadLogo({ ...uploadLogo, loading: true });
    formData.append('upload_preset', 'cqdbrmkw');
    formData.append('file', data);
    // axios
    //   .post(
    //     `https://api.cloudinary.com/v1_1/blonk-group/image/upload`,
    //     formData
    //   )
    //   .then((res) => {
    //     setUploadLogo({
    //       ...uploadLogo,
    //       loading: false,
    //       url: res.data.secure_url,
    //     });
    //     console.log('sdsdsdsdsd', res.data.secure_url);
    //   })
    //   .catch((err) => {
    //     setUploadLogo({ ...uploadLogo, loading: false, error: err });
    //   });
  };

  const onFinishHandler = (values: any) => {
    imageData && imageData !== prevImageData && onUploadCompanyLogo(imageData);

    const data: any = {
      title: values.companyName,
      description: values.companyDescription,
      sector: values.sector,
      website: values.companyWebsite,
      companySize: values.companySize,
      facebook: values.facebook,
      linkedIn: values.linkedIn,
      twitter: values.twitter,
    };
    setCompanyData({ ...data });
  };
  return (
    <>
      <PageTitle title="Create new company" back />
      <Row>
        <Col span={24}>
          <Card className="mb-4">
            <CompanyForm
              onFinish={onFinishHandler}
              imageData={(data: any) => setImageData(data)}
              isLoading={loading || uploadLogo.loading}
              hasError={hasError}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddCompany;
