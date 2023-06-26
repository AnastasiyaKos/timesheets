// import {createAsyncThunk} from "@reduxjs/toolkit";
// import {authAPI, supportApi} from "../../../api/apiApp";
// import {handlerApiRequests} from "../../../services/handlerApiRequests.service";
// import {setSubPartner} from "../appSlice/appSlice";
// import {getCountNewDialog} from "../mainBoxSlices/supportSlice/supportExtraRedurers";
// import {legalEntityAPI} from "../../../api/typesApi/legalEntityApi";
// import {marketingAPI} from "../../../api/typesApi/marketingApi";
//
//
// export const getSubPartnerByUserID = createAsyncThunk(
//   "sidebar/getSubPartnerByUserID",
//   async (userId, thunkAPI) => {
//     let res = await authAPI.getPartnerProfile();
//     thunkAPI.dispatch(setSubPartner(true));
//     return res;
//   }
// );
//
// export const getAdminProfile = createAsyncThunk(
//   "sidebar/getAdminProfile",
//   async (stub, thunkAPI) => {
//     let res = await handlerApiRequests(
//       [
//         {
//           api: authAPI.getAdminProfile,
//         },
//       ],
//       thunkAPI
//     );
//
//     if (res.companyId) {
//       try {
//         let company = await legalEntityAPI.getLegalEntityById(res.companyId);
//         res.companyName = company.companyName
//       } catch (e) {
//       }
//       try {
//         res.contract = await legalEntityAPI.getCompanyData({id: res.companyId, type: 'contracts'});
//       } catch (e) {
//       }
//     }
//
//     let operator = await supportApi.getOperatorByUserId(res.id);
//     res.operator = operator.id ? operator : {};
//     operator.id && thunkAPI.dispatch(getCountNewDialog());
//     !operator.id && await thunkAPI.dispatch(getSubPartnerByUserID(res.id));
//
//     return res;
//   }
// );
//
// export const updateAvailableOperator = createAsyncThunk(
//   "sidebar/updateAvailableOperator",
//   async (data, thunkAPI) => {
//     if (data.operator) {
//       console.log("res");
//       return data.operator;
//     } else {
//       return await handlerApiRequests(
//         [{api: supportApi.updateAvailableOperator, params: data}],
//         thunkAPI
//       );
//     }
//   }
// );
//
// export const changePassword = createAsyncThunk(
//   "sidebar/changePassword",
//   async (data, thunkAPI) => {
//     let res = await handlerApiRequests(
//       [{api: authAPI.changeOldPassword, params: data.body}],
//       thunkAPI,
//       "successChangePassword"
//     )
//     return res;
//   }
// );
//
// export const getAdvert = createAsyncThunk(
//   "sidebar/getAdvert",
//   async (data) => {
//     return await marketingAPI.getBannerByPosition(data)
//   }
// );
//
// export const addBannerClick = createAsyncThunk(
//   "sidebar/addBannerClick",
//   async (id) => {
//     return await marketingAPI.addBannerClick(id);
//   }
// );
//
// const extraReducers = {
//   [getAdminProfile.fulfilled]: (state, action) => {
//     // console.log(action.payload)
//     state.profile.data = {...state.profile.data, ...action.payload};
//   },
//
//   [getSubPartnerByUserID.fulfilled]: (state, action) => {
//     state.profile.data.subPartner = action.payload;
//   },
//
//   [changePassword.fulfilled]: (state) => {
//     state.dialogs.changePassword = false;
//   },
//
//   [updateAvailableOperator.fulfilled]: (state, action) => {
//     state.profile.data.operator = action.payload;
//   },
//
//   [getAdvert.fulfilled]: (state, action) => {
//     state.banner = action.payload;
//   },
// };
//
// export default extraReducers;
