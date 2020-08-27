
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
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
     * certkey �Ӽ��� ���� �����ɴϴ�.
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
     * certkey �Ӽ��� ���� �����մϴ�.
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
     * corpNum �Ӽ��� ���� �����ɴϴ�.
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
     * corpNum �Ӽ��� ���� �����մϴ�.
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
     * mgtKey �Ӽ��� ���� �����ɴϴ�.
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
     * mgtKey �Ӽ��� ���� �����մϴ�.
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
     * sendSMS �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isSendSMS() {
        return sendSMS;
    }

    /**
     * sendSMS �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setSendSMS(boolean value) {
        this.sendSMS = value;
    }

    /**
     * smsMessage �Ӽ��� ���� �����ɴϴ�.
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
     * smsMessage �Ӽ��� ���� �����մϴ�.
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
     * mailTitle �Ӽ��� ���� �����ɴϴ�.
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
     * mailTitle �Ӽ��� ���� �����մϴ�.
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
     * businessLicenseYN �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isBusinessLicenseYN() {
        return businessLicenseYN;
    }

    /**
     * businessLicenseYN �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setBusinessLicenseYN(boolean value) {
        this.businessLicenseYN = value;
    }

    /**
     * bankBookYN �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isBankBookYN() {
        return bankBookYN;
    }

    /**
     * bankBookYN �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setBankBookYN(boolean value) {
        this.bankBookYN = value;
    }

}
