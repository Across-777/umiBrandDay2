import { getBrand } from '../services/brandService'

export default {
    namespace: 'brand',
    state: {
        value: 0,
        date: 'mieyoushuju',
    },
    effects: {
        *redirect({ payload }, { call, select, put }) {
            const data = yield call(getBrand);
            console.log(data);
            // yield put({type: 'updateState', payload})
            payload.date = date;
            yield put({ type: 'updateState', payload });

        },
        *getBrandInfo({ payload }, { call, select, put }){
            const data = yield call(getBrand);
            console.log(data);
            // yield put({type: 'updateState', payload})
            payload.date = date;
            yield put({ type: 'updateState', payload });
        }
    },
    reducers: {
        updateState(state, { payload }) {
            console.log('reducers payload date', payload.data);
            return {
                ...state,
                ...payload
            }
        },
    },
    subscriptions: {
        setup({dispatch,history}){
            history.listen(
                ({pathname})=>{
                    if(pathname ==='/option'){
                        dispatch({
                            type:'getBrandInfo',
                        })
                    }
                }
            )
        },
    }

}