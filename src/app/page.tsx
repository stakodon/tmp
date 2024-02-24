"use client";

import { useState } from "react";

function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleChange];
}

function validateEmail(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password: string): boolean {
  const regex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
  return regex.test(password);
}

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => (
  <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
    <div className="modal-box">
      <h3 className="text-lg font-bold">알림</h3>
      <p className="py-4">{message}</p>
      <div className="modal-action">
        <button onClick={onClose} className="p-2 mt-2 border btn">
          확인
        </button>
      </div>
    </div>
  </div>
);

export default function LogIn() {
  const [loading, setLoading] = useState(false);

  const [formValues, handleChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const [modal, setModal] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const showModal = (message: string) => {
    setModal({ show: true, message });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      showModal("이메일을 확인해 주세요.");
      return;
    }
    if (password.length < 6 || password.length > 32) {
      showModal("비밀번호는 8자에서 20자 사이여야 합니다.");
      return;
    }
    if (!validatePassword(password)) {
      showModal(
        "비밀번호는 최소 8자에서 최대 20자 사이이며, 최소 하나의 소문자와 숫자를 포함해야 합니다."
      );
      return;
    }

    try {
      setTimeout(() => {
        showModal("2024.01.25 17:00부터 로그인 가능합니다.");
        return;
      }, 1000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-2xl font-bold">Sign in to Stakodon</div>
      <form onSubmit={onSubmit}>
        <div className="mt-5 label">
          <span className="text-[16px] font-bold label-text">Email</span>
        </div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="w-full text-sm font-light input input-bordered"
        />
        <div className="mt-6 label">
          <span className="label-text text-[16px] font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="8+ characters"
          className="w-full text-sm font-light input input-bordered"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full mt-10 text-white bg-black rounded-full min-h-14 btn hover:bg-gray-600"
        >
          {loading ? "loading..." : "Sign In"}
        </button>
      </form>

      <div className="w-full mt-5 text-sm text-center">
        <p>방문해 주셔서 감사합니다.</p>
        <p>당신은 제가 만든 서비스에 놀랄 것입니다.</p>
        <p>현재 작은 오류를 수정 중입니다.</p>
        <p className="underline">
          서비스는 2024.01.25 오후 5시부터 가능합니다.
        </p>
      </div>
      {modal.show && (
        <Modal
          message={modal.message}
          onClose={() => {
            setModal({ show: false, message: "" });
            setLoading(false);
          }}
        />
      )}
    </>
  );
}
