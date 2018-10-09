import HttpService from "../../shared/services/HttpService";

export const DiaryExpensesActionTypes = {
    add: '[DIARY EXPENSES] ADD',
    update: '[DIARY EXPENSES] UPDATE',
    remove: '[DIARY EXPENSES] REMOVE',
    load: '[DIARY EXPENSES] load',
}


const get = () => async (dispatch) => {
        const data = await HttpService.getDiaryExpense();
        dispatch({
            type: DiaryExpensesActionTypes.load,
            payload: data
        })
}

const save = (payload) => async (dispatch) => {
    const response = await HttpService.saveDiaryExpense(payload);
    dispatch({
        type: DiaryExpensesActionTypes.add,
        payload
    })
    return response;
}

const update = (payload) => async (dispatch) => {
    await HttpService.updateDiaryExpense(payload);
    dispatch({
        type: DiaryExpensesActionTypes.update,
        payload
    })
}

const remove = (payload) => async (dispatch) => {
    await HttpService.removeDiaryExpense(payload);
    dispatch({
        type: DiaryExpensesActionTypes.remove,
        payload
    })
}


export const DiaryExpensesActions = {
    get,
    save,
    update,
    remove
}



export class PredefinedExpense {
    id;
    constructor(name, defaultAmount, createdAt){
        this.name = name;
        this.defaultAmount = defaultAmount;
        this.createdAt = createdAt;
    }
}


export const PredefinedExpensesActionTypes = {
    add: '[PREDEFINED EXPENSES] ADD',
    update: '[PREDEFINED EXPENSES] UPDATE',
    remove: '[PREDEFINED EXPENSES] REMOVE',
    load: '[PREDEFINED EXPENSES] load',
}


const getPredefinedExpenses = () => async (dispatch: Dispatch) => {
        const data = await HttpService.getPredefinedExpenses();
        dispatch({
            type: PredefinedExpensesActionTypes.load,
            payload: data
        })
}

const savePredefinedExpenses = () => async (dispatch: Dispatch) => {
    const predefined = new PredefinedExpense('Text', 1, new Date().getTime()) ;
    
    const doc = await HttpService.savePredefinedExpense(predefined);
    dispatch({
        type: PredefinedExpensesActionTypes.add,
        payload: { ...predefined, id: doc.id}
    })
}

const updatePredefinedExpenses = (payload: any) => async (dispatch: Dispatch) => {
    await HttpService.updatePredefinedExpense(payload);
    dispatch({
        type: PredefinedExpensesActionTypes.update,
        payload
    })
}

const removePredefinedExpense = (payload: any) => async (dispatch: Dispatch) => {
    await HttpService.removePredefinedExpense(payload);
    dispatch({
        type: PredefinedExpensesActionTypes.remove,
        payload
    })
}


export const PredefinedExpensesActions = {
    getPredefinedExpenses,
    savePredefinedExpenses,
    updatePredefinedExpenses,
    removePredefinedExpense
}