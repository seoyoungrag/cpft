package kr.co.teamfresh.cpft.admin.web.backend.config.modelmap.mapper;

import org.modelmapper.PropertyMap;

import kr.co.teamfresh.cpft.admin.web.backend.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.model.entity.Carrier;
import kr.co.teamfresh.cpft.model.entity.User;
import kr.co.teamfresh.cpft.model.entity.carrier.WorkGroupManager;
import kr.co.teamfresh.cpft.model.entity.carrier.WorkGroupManagerPK;
import kr.co.teamfresh.cpft.model.entity.order.Order;
public class OrderDtoToEnMap extends PropertyMap<OrderDTO, Order> {
	@Override
	protected void configure() {
		using(ctx -> generateWorkGroup(
				((OrderDTO) ctx.getSource()).getCarrierSeq(),
				((OrderDTO) ctx.getSource()).getWorkGroupNm(),
				((OrderDTO) ctx.getSource()).getWorkGroupManager())
				).map(source, destination.getWorkGroupManager());
		using(ctx -> generateCareer(((OrderDTO)ctx.getSource()).getCarrierSeq())).map(source, destination.getCarrier());
		using(ctx -> generateUser(((OrderDTO)ctx.getSource()).getUserSeq())).map(source, destination.getUser());
	}

	private User generateUser(Integer userSeq) {
		User c = new User();
		c.setUserSeq(userSeq);
		return c;
	}

	private Carrier generateCareer(Integer carrierSeq) {
		Carrier c = new Carrier();
		c.setCarrierSeq(carrierSeq);
		return c;
	}

	private WorkGroupManager generateWorkGroup(Integer carrierSeq, String workGroupNm, String workGroupManager) {
    	WorkGroupManager wg = new WorkGroupManager();
    	WorkGroupManagerPK workGroupManagerPK = new WorkGroupManagerPK(carrierSeq, workGroupNm, workGroupManager);
    	wg.setWorkGroupManagerPK(workGroupManagerPK);
    	return wg;
	}
}