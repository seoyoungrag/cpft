package kr.co.teamfresh.cpft.truckowner.web.backend.dto.order;

import java.io.Serializable;

import kr.co.teamfresh.cpft.truckowner.web.backend.dto.CommonDate;
import lombok.Data;

@Data
public class OrderTruckOwnerForTruckOwnerListDTO extends CommonDate implements Serializable{

	private OrderDTO order;
	//private TruckOwnerForTruckOwnerListDTO truckOwner;
	private String message;
	private String status;
	private String readYn;
	
}
