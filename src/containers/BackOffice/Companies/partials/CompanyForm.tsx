import React, { useState } from "react";
import { Row, Col, Form, Input, Select, Button, Upload, message } from "antd";
import ImgCrop from "antd-img-crop";

const { Option } = Select;
const { TextArea } = Input;

interface Props {
  onFinish?: any;
  imageData?: any;
  company?: any;
  hasError?: boolean;
  isLoading?: boolean;
}
const CompanyForm: React.FC<Props> = ({
  onFinish,
  imageData,
  isLoading,
  hasError,
  company,
}) => {
  const [form] = Form.useForm();
  const [imgLoad, setImgLoad] = useState(false);
  const [fileList, setFileList] = useState([]);

  const beforeUpload = (file: any) => {
    setImgLoad(true);
    const img = [
      "image/gif",
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/svg",
    ];
    const isImg = img.includes(file.type);
    if (!isImg) {
      setImgLoad(false);
      message.error("You can only upload images file!");
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      setImgLoad(false);
      message.error("Image must smaller than 5MB!");
    }
    return isImg && isLt5M;
  };

  const onChange = ({ fileList }: any) => {
    if (imgLoad) {
      setFileList(fileList);
      fileList.length !== 0 && imageData(fileList[0].originFileObj);
    }
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow: any = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <Form
        name="registration-form"
        layout="vertical"
        form={form}
        // onFieldsChange={() => dispatch(httpClear())}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Row justify="center" gutter={16}>
          <Col span={12}>
            <Form.Item
              name="companyName"
              label="Company name"
              rules={[
                {
                  required: true,
                  message: "Please input your Company Name!",
                },
              ]}
              hasFeedback
            >
              <Input
                type="text"
                placeholder="Enter Company Name"
                defaultValue={company && company.name}
              />
            </Form.Item>
            <Form.Item name="companyLogo" label="Company Logo">
              <ImgCrop beforeCrop={beforeUpload} rotate grid>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  accept="image/*"
                  multiple={false}
                  action="https://api.cloudinary.com/v1_1/blonk-group/image/upload"
                  beforeUpload={beforeUpload}
                >
                  {fileList.length < 1 && "+ Upload"}
                </Upload>
              </ImgCrop>
            </Form.Item>
            <Form.Item
              name="companyDescription"
              label="Company Description"
              rules={[
                {
                  required: true,
                  message: "Please input your Company Description!",
                },
              ]}
              hasFeedback
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="sector"
              label="Sector"
              rules={[
                {
                  required: true,
                  message: "Please select sector!",
                },
              ]}
              hasFeedback
            >
              <Select
                showSearch
                placeholder="Select sector"
                // optionFilterProp="children"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="companySize"
              label="Company Size"
              rules={[
                {
                  required: true,
                  message: "Please select sector!",
                },
              ]}
              hasFeedback
            >
              <Select
                showSearch
                placeholder="Select company size"
                filterOption={(input, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="1-20">1-20</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="companyWebiste"
              label="Company Website"
              rules={[
                {
                  type: "url",
                  message: "The input is not valid URL!",
                },
              ]}
              hasFeedback
            >
              <Input type="text" placeholder="Enter Company Website URL" />
            </Form.Item>
            <Form.Item
              name="facebook"
              label="Facebook"
              rules={[
                {
                  type: "url",
                  message: "The input is not valid URL!",
                },
              ]}
              hasFeedback
            >
              <Input type="text" placeholder="Enter Facebook URL" />
            </Form.Item>
            <Form.Item
              name="twitter"
              label="Twitter"
              rules={[
                {
                  type: "url",
                  message: "The input is not valid URL!",
                },
              ]}
              hasFeedback
            >
              <Input type="text" placeholder="Enter Twitter URL" />
            </Form.Item>
            <Form.Item
              name="linkedIn"
              label="LinkedIn"
              rules={[
                {
                  type: "url",
                  message: "The input is not valid URL!",
                },
              ]}
              hasFeedback
            >
              <Input type="text" placeholder="Enter LinkedIn URL" />
            </Form.Item>
            <Form.Item>
              <div className="text-right">
                <Button
                  className="ant-btn-amber"
                  htmlType="submit"
                  shape="round"
                  disabled={hasError}
                  loading={isLoading}
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CompanyForm;
