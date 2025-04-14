import { UserState } from "@/features/user/userSlice";

export interface RootState {
  user: UserState;
  // Add other state slices here as they are added to the root reducer
}
