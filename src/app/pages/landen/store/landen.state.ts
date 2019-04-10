import { Land } from '../models/land.model';

export interface LandenState {
    landen: Land[] | null;
    isLoading: boolean;
    error: any;
}

export const landenInitialState: LandenState = {
    landen: null,
    isLoading: true,
    error: null
};
