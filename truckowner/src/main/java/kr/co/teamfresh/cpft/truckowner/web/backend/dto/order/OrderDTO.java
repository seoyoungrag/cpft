package kr.co.teamfresh.cpft.truckowner.web.backend.dto.order;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import kr.co.teamfresh.cpft.truckowner.web.backend.dto.CommonDate;
import lombok.Data;

@Data
public class OrderDTO extends CommonDate {
	private Integer carrierSeq;
	private String carrierNm;
	private Integer userSeq;
	private String userNm;
	private Integer orderSeq;
	private String workGroupNm;
	private String workGroupManager;
	private String rcritType;
	private String rcritMans;
	private List<String> carTypes = new ArrayList<>();
	private String tonType;
	private String dlvyPrdlst;
	private String salary;
	private String expensYn;
	private String workArea;
	private String opratSctn;
	private String workDaysType;
	private List<String> workDays = new ArrayList<>();
	private int workHourStart;
	private int workMinuteStart;
	private int workHourEnd;
	private int workMinuteEnd;
	private String detailMatter;
	private String status;
	private String workAreaEtc;
	private Set<OrderTruckOwnerForOrderManageDTO> orderTruckOwners = new HashSet<OrderTruckOwnerForOrderManageDTO>(0);
}
