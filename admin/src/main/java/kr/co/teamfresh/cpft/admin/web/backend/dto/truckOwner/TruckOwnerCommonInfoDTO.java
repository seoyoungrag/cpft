package kr.co.teamfresh.cpft.admin.web.backend.dto.truckOwner;

import java.io.Serializable;
import lombok.Data;

@Data
public class TruckOwnerCommonInfoDTO implements Serializable{

	private String userName;
	private String telno;
	private String ownerCode;
	private Integer CarrierSeq;
	
}
