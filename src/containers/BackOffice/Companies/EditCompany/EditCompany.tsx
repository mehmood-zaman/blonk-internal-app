import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import { useGetSingleCompanyQuery } from "../../../graphql/generated/graphql";

import {
  Row,
  Col,
  Card,
  Alert,
  Empty,
  Skeleton,
  Button,
  notification,
} from 'antd';
import CompanyForm from '../partials/CompanyForm';
import PageTitle from '../../../../components/UI/PageTitle/PageTitle';
import ErrorCard from '../../../../components/UI/ErrorCard/ErrorCard';
import { Fade } from 'react-awesome-reveal';

const EditCompany: React.FC = () => {
  let { companyId } = useParams();

  const [imageData, setImageData] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    getSingleCompany: '',
  });
  // const { data, loading, error } = useGetSingleCompanyQuery({
  //   variables: {
  //     companyId: companyId,
  //   },
  // });

  const isLoading = false; //useSelector((state) => state.http.loading);
  const hasError = false; //useSelector((state) => state.http.error);

  const onFinishHandler = (values: any) => {};
  return (
    <>
      <PageTitle title="Edit company" back>
        {!isLoading && hasError && <Alert message={hasError} type="error" />}
      </PageTitle>
      {!loading && error ? (
        <ErrorCard />
      ) : (
        <Row>
          <Col span={24}>
            <Fade>
              <Card className="m-t-30 mb-4">
                <Skeleton
                  active
                  paragraph={{ rows: 10 }}
                  className="p-4"
                  loading={loading}
                >
                  {data && data.getSingleCompany !== null ? (
                    <CompanyForm
                      company={data?.getSingleCompany}
                      onFinish={onFinishHandler}
                      imageData={(data: any) => setImageData(data)}
                    />
                  ) : (
                    <div className="p-4 m-t-40 m-b-40">
                      <Empty description={<span>No company found</span>}>
                        <Link to={'/companies/new'}>
                          <Button
                            className="ant-btn-amber"
                            shape="round"
                            size="middle"
                          >
                            Create new company
                          </Button>
                        </Link>
                      </Empty>
                    </div>
                  )}
                </Skeleton>
              </Card>
            </Fade>
          </Col>
        </Row>
      )}
    </>
  );
};

export default EditCompany;
