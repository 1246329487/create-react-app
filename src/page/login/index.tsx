import ProForm, { ProFormSelect } from "@ant-design/pro-form";
import { useEffect, useRef } from "react";
const Login = () => {
  const formRef = useRef();
  useEffect(() => {
    const a =  formRef.current.setFieldsValue({'useMode':123});
  },[]);
  return (
    <div>
      <ProForm formRef={formRef}>
        <ProForm.Group>
          <ProFormSelect
            options={[
              {
                value: "chapter",
                label: "盖章后生效",
              },
            ]}
            width="xs"
            name="useMode"
            label="合同约定生效方式"
          />
        </ProForm.Group>
      </ProForm>
    </div>
  );
};
export default Login;
