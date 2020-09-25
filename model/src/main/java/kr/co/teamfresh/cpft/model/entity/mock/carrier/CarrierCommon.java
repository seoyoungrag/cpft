package kr.co.teamfresh.cpft.model.entity.mock.carrier;

import java.io.File;
import java.time.LocalDateTime;

public class CarrierCommon {

	private Integer CarrierSeq;
	// 법인명 =? carrierNm
	private String corporationName;
	// 대표자
	private String ceoName;
	// 사업자등록번호
	private String registrationNumber;
	// 운송사 코드
	private String carrierCode;
	// 고객센터 전화번호
	private String customerCenterNumber;
	// 고객센터 운영시간
	private String customerCenterTime;
	// 서비스 운영여부
	private String serviceYn;
	// 사업자등록증
	private File businessLicense;
	// 직인
	private File seal;
	// 계약일? 생성일?
	private LocalDateTime createdAt;
	// 수정일
	private LocalDateTime modifiedAt;
	
	public Integer getCarrierSeq() {
		return CarrierSeq;
	}
	public void setCarrierSeq(Integer carrierSeq) {
		CarrierSeq = carrierSeq;
	}
	public String getCorporationName() {
		return corporationName;
	}
	public void setCorporationName(String corporationName) {
		this.corporationName = corporationName;
	}
	public String getCeoName() {
		return ceoName;
	}
	public void setCeoName(String ceoName) {
		this.ceoName = ceoName;
	}
	public String getRegistrationNumber() {
		return registrationNumber;
	}
	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}
	public String getCarrierCode() {
		return carrierCode;
	}
	public void setCarrierCode(String carrierCode) {
		this.carrierCode = carrierCode;
	}
	public String getCustomerCenterNumber() {
		return customerCenterNumber;
	}
	public void setCustomerCenterNumber(String customerCenterNumber) {
		this.customerCenterNumber = customerCenterNumber;
	}
	public String getCustomerCenterTime() {
		return customerCenterTime;
	}
	public void setCustomerCenterTime(String customerCenterTime) {
		this.customerCenterTime = customerCenterTime;
	}
	public String getServiceYn() {
		return serviceYn;
	}
	public void setServiceYn(String serviceYn) {
		this.serviceYn = serviceYn;
	}
	public File getBusinessLicense() {
		return businessLicense;
	}
	public void setBusinessLicense(File businessLicense) {
		this.businessLicense = businessLicense;
	}
	public File getSeal() {
		return seal;
	}
	public void setSeal(File seal) {
		this.seal = seal;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public LocalDateTime getModifiedAt() {
		return modifiedAt;
	}
	public void setModifiedAt(LocalDateTime modifiedAt) {
		this.modifiedAt = modifiedAt;
	}
	public CarrierCommon(Integer carrierSeq, String corporationName, String ceoName, String registrationNumber,
			String carrierCode, String customerCenterNumber, String customerCenterTime, String serviceYn) {
		super();
		CarrierSeq = carrierSeq;
		this.corporationName = corporationName;
		this.ceoName = ceoName;
		this.registrationNumber = registrationNumber;
		this.carrierCode = carrierCode;
		this.customerCenterNumber = customerCenterNumber;
		this.customerCenterTime = customerCenterTime;
		this.serviceYn = serviceYn;
	}
	public CarrierCommon() {};
	
	
	
	
}
