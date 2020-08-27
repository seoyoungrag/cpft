package com.baroservice.api;

import com.baroservice.ws.BaroServiceBANKACCOUNT;
import com.baroservice.ws.BaroServiceBANKACCOUNTSoap;
import com.baroservice.ws.BaroServiceCARD;
import com.baroservice.ws.BaroServiceCARDSoap;
import com.baroservice.ws.BaroServiceCASHBILL;
import com.baroservice.ws.BaroServiceCASHBILLSoap;
import com.baroservice.ws.BaroServiceCORPSTATE;
import com.baroservice.ws.BaroServiceCORPSTATESoap;
import com.baroservice.ws.BaroServiceEDOC;
import com.baroservice.ws.BaroServiceEDOCSoap;
import com.baroservice.ws.BaroServiceFAX;
import com.baroservice.ws.BaroServiceFAXSoap;
import com.baroservice.ws.BaroServiceSMS;
import com.baroservice.ws.BaroServiceSMSSoap;
import com.baroservice.ws.BaroServiceTI;
import com.baroservice.ws.BaroServiceTISoap;

import java.net.MalformedURLException;
import java.net.URL;

/**
 * 바로빌 API 서비스
 *
 * 이 클래스를 Bean 으로 등록하여 사용하세요.
 *
 * @author 한승룡
 * @since 2019-04-26
 */
public class BarobillApiService {

	/**
	 * 바로빌 API endpoint
	 */
	public String endpoint;

	/**
	 * 바로빌 FTP server
	 */
	public String ftpServer;

	/**
	 * 바로빌 FTP port
	 */
	public int ftpPort;

	/**
	 * 전자세금계산서 API
	 */
	public BaroServiceTISoap taxInvoice;

	/**
	 * 전자문서 API
	 */
	public BaroServiceEDOCSoap edoc;

	/**
	 * 현금영수증 API
	 */
	public BaroServiceCASHBILLSoap cashbill;

	/**
	 * 문자 API
	 */
	public BaroServiceSMSSoap sms;

	/**
	 * 팩스 API (서비스 신청이 필요합니다.)
	 */
	public BaroServiceFAXSoap fax;

	/**
	 * 카드내역조회 API (서비스 신청이 필요합니다.)
	 */
	public BaroServiceCARDSoap card;

	/**
	 * 계좌내역조회 API (서비스 신청이 필요합니다.)
	 */
	public BaroServiceBANKACCOUNTSoap bankAccount;

	/**
	 * 휴폐업조회 API (서비스 신청이 필요합니다.)
	 */
	public BaroServiceCORPSTATESoap corpState;

	/**
	 * 바로빌 API 서비스 생성자
	 *
	 * @param barobillApiProfile 바로빌 API 프로필
	 */
	public BarobillApiService(BarobillApiProfile barobillApiProfile) throws MalformedURLException {
		switch (barobillApiProfile) {
			case TESTBED:
				this.endpoint = "http://testws.baroservice.com";
				this.ftpServer = "testftp.barobill.co.kr";
				this.ftpPort = 9031;
				break;
			case RELEASE:
				this.endpoint = "http://ws.baroservice.com";
				this.ftpServer = "ftp.barobill.co.kr";
				this.ftpPort = 9030;
				break;
			case RELEASE_SSL:
				this.endpoint = "https://ws.baroservice.com:8000";
				this.ftpServer = "ftp.barobill.co.kr";
				this.ftpPort = 9030;
				break;
		}

		this.taxInvoice = new BaroServiceTI(new URL(this.endpoint + "/TI.asmx?WSDL")).getBaroServiceTISoap();
		this.edoc = new BaroServiceEDOC(new URL(this.endpoint + "/EDOC.asmx?WSDL")).getBaroServiceEDOCSoap();
		this.cashbill = new BaroServiceCASHBILL(new URL(this.endpoint + "/CASHBILL.asmx?WSDL")).getBaroServiceCASHBILLSoap();
		this.sms = new BaroServiceSMS(new URL(this.endpoint + "/SMS.asmx?WSDL")).getBaroServiceSMSSoap();
		this.fax = new BaroServiceFAX(new URL(this.endpoint + "/FAX.asmx?WSDL")).getBaroServiceFAXSoap();
		this.card = new BaroServiceCARD(new URL(this.endpoint + "/CARD.asmx?WSDL")).getBaroServiceCARDSoap();
		this.bankAccount = new BaroServiceBANKACCOUNT(new URL(this.endpoint + "/BANKACCOUNT.asmx?WSDL")).getBaroServiceBANKACCOUNTSoap();
		this.corpState = new BaroServiceCORPSTATE(new URL(this.endpoint + "/CORPSTATE.asmx?WSDL")).getBaroServiceCORPSTATESoap();
	}

}
