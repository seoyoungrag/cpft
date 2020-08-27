
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CERTKEY" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="MgtKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendSMS" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="SMSMessage" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="MailTitle" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BusinessLicenseYN" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="BankBookYN" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "certkey",
    "corpNum",
    "mgtKey",
    "sendSMS",
    "smsMessage",
    "mailTitle",
    "businessLicenseYN",
    "bankBookYN"
})
@XmlRootElement(name = "PreIssueTaxInvoiceEx")
public class PreIssueTaxInvoiceEx {

    @XmlElement(name = "CERTKEY")
    protected String certkey;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "MgtKey")
    protected String mgtKey;
    @XmlElement(name = "SendSMS")
    protected boolean sendSMS;
    @XmlElement(name = "SMSMessage")
    protected String smsMessage;
    @XmlElement(name = "MailTitle")
    protected String mailTitle;
    @XmlElement(name = "BusinessLicenseYN")
    protected boolean businessLicenseYN;
    @XmlElement(name = "BankBookYN")
    protected boolean bankBookYN;

    /**
     * certkey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCERTKEY() {
        return certkey;
    }

    /**
     * certkey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCERTKEY(String value) {
        this.certkey = value;
    }

    /**
     * corpNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorpNum() {
        return corpNum;
    }

    /**
     * corpNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorpNum(String value) {
        this.corpNum = value;
    }

    /**
     * mgtKey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMgtKey() {
        return mgtKey;
    }

    /**
     * mgtKey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMgtKey(String value) {
        this.mgtKey = value;
    }

    /**
     * sendSMS 속성의 값을 가져옵니다.
     * 
     */
    public boolean isSendSMS() {
        return sendSMS;
    }

    /**
     * sendSMS 속성의 값을 설정합니다.
     * 
     */
    public void setSendSMS(boolean value) {
        this.sendSMS = value;
    }

    /**
     * smsMessage 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSMSMessage() {
        return smsMessage;
    }

    /**
     * smsMessage 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSMSMessage(String value) {
        this.smsMessage = value;
    }

    /**
     * mailTitle 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMailTitle() {
        return mailTitle;
    }

    /**
     * mailTitle 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMailTitle(String value) {
        this.mailTitle = value;
    }

    /**
     * businessLicenseYN 속성의 값을 가져옵니다.
     * 
     */
    public boolean isBusinessLicenseYN() {
        return businessLicenseYN;
    }

    /**
     * businessLicenseYN 속성의 값을 설정합니다.
     * 
     */
    public void setBusinessLicenseYN(boolean value) {
        this.businessLicenseYN = value;
    }

    /**
     * bankBookYN 속성의 값을 가져옵니다.
     * 
     */
    public boolean isBankBookYN() {
        return bankBookYN;
    }

    /**
     * bankBookYN 속성의 값을 설정합니다.
     * 
     */
    public void setBankBookYN(boolean value) {
        this.bankBookYN = value;
    }

}
