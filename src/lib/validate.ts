import Joi from '@hapi/joi';

// 사용자 로그인시 요청 값 검사 함수
export const loginValidate = (body: Object) => {
  const schema = Joi.object().keys({
    memberId: Joi.string().max(50).required(),
    pw: Joi.string().max(500).required(),
  });

  return schema.validateAsync(body);
};

// 게시글 작성 요청 값 검사 함수
export const writePostValidate = (body: Object) => {
  const schema = Joi.object().keys({
    title: Joi.string().max(50).required(),
    contents: Joi.string().required(),
    category: Joi.string().required(),
    thumnailAddress: Joi.string().allow(null).allow(''),
  });

  return schema.validateAsync(body);
};

// 게시글 수정 요청 값 검사 함수
export const updatePostValidate = (body: Object) => {
  const schema = Joi.object().keys({
    id: Joi.string().required(),
    title: Joi.string().max(50).required(),
    contents: Joi.string().required(),
    thumnailAddress: Joi.string().allow(null),
  });

  return schema.validateAsync(body);
};
