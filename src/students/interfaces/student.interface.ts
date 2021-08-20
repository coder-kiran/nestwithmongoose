import {Document} from 'mongoose'
export interface Student extends Document {
    readonly fname: string;
    readonly title: string;
}