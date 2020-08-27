
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
 *         &lt;element name="Invoice" type="{http://ws.baroservice.com/}TaxInvoice" minOccurs="0"/&gt;
 *         &lt;element name="SendSMS" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="ForceIssue" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="MailTitle" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
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
    "invoice",
    "sendSMS",
    "forceIssue",
    "mailTitle"
})
@XmlRootElement(name = "RegistAndIssueBrokerTaxInvoice")
public class RegistAndIssueBrokerTaxInvoice {

    @XmlElement(name = "CERTKEY")
    protected String certkey;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "Invoice")
    protected TaxInvoice invoice;
    @XmlElement(name = "SendSMS")
    protected boolean sendSMS;
    @XmlElement(name = "ForceIssue")
    protected boolean forceIssue;
    @XmlElement(name = "MailTitle")
    protected String mailTitle;

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
     * invoice �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link TaxInvoice }
     *     
     */
    public TaxInvoice getInvoice() {
        return invoice;
    }

    /**
     * invoice �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link TaxInvoice }
     *     
     */
    public void setInvoice(TaxInvoice value) {
        this.invoice = value;
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
     * forceIssue �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isForceIssue() {
        return forceIssue;
    }

    /**
     * forceIssue �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setForceIssue(boolean value) {
        this.forceIssue = value;
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

}
