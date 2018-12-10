import {CarbonLDP} from 'carbonldp/CarbonLDP';

class CarbonLDPService {

  constructor() {
    const carbonldp: CarbonLDP = new CarbonLDP('http://localhost:8083');
    this.extendCarbonLDPSchema();
  }

  extendCarbonLDPSchema() {
  }

}

export default CarbonLDPService;
