import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Blogportfolio } from './blogportfolio'
import { Topfoods,Instantfoods,MustIncfoods,Goodfoods,Vegfoods,Nonvegfoods,Seeds,Fruits} from './lactationData'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            topfoods: Topfoods,
            instantfoods: Instantfoods,
            mustIncfoods : MustIncfoods,
            goodfoods:Goodfoods,
            vegfoods:Vegfoods,
            nonvegfoods:Nonvegfoods,
            seeds:Seeds,
            fruits:Fruits,
            blogportfolio: Blogportfolio,
        })
    );

    return store;
}