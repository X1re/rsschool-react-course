import { Component, ReactNode } from 'react';
import { withRouter, WithRouterProps } from '../HOC/withRouter';

interface DataState {
  name: string;
  birthday: string;
  country: string;
  sex: string; //radio
  agreement: boolean; //checkbox
  pic: string; //upload
}

class Survey extends Component<WithRouterProps, DataState> {
  constructor(props: WithRouterProps) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
      country: '',
      sex: '',
      agreement: false,
      pic: '',
    };
  }
  render(): ReactNode {
    return <h1>This is Survey</h1>;
  }
}

export default withRouter(Survey);

/*
    name input
    birthday input
    country dropdown/select
    agreement checkbox
    sex (radio)
    pic file upload (image)
 */
