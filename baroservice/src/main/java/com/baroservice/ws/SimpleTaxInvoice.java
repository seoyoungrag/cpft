
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>SimpleTaxInvoice complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="SimpleTaxInvoice"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="NTSSendKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="WriteDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="ModifyCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxRegID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CEOName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="AmountTotal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxTotal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TotalAmount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SimpleTaxInvoice", propOrder = {
    "ntsSendKey",
    "writeDate",
    "taxType",
    "modifyCode",
    "corpNum",
    "taxRegID",
    "corpName",
    "ceoName",
    "amountTotal",
    "taxTotal",
    "totalAmount"
})
public class SimpleTaxInvoice {

    @XmlElement(name = "NTSSendKey")
    protected String ntsSendKey;
    @XmlElement(name = "WriteDate")
    protected String writeDate;
    @XmlElement(name = "TaxType")
    protected int taxType;
    @XmlElement(name = "ModifyCode")
    protected String modifyCode;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "TaxRegID")
    protected String taxRegID;
    @XmlElement(name = "CorpName")
    protected String corpName;
    @XmlElement(name = "CEOName")
    protected String ceoName;
    @XmlElement(name = "AmountTotal")
    protected String amountTotal;
    @XmlElement(name = "TaxTotal")
    protected String taxTotal;
    @XmlElement(name = "TotalAmount")
    protected String totalAmount;

    /**
     * ntsSendKey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSSendKey() {
        return ntsSendKey;
    }

    /**
     * ntsSendKey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSSendKey(String value) {
        this.ntsSendKey = value;
    }

    /**
     * writeDate �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getWriteDate() {
        return writeDate;
    }

    /**
     * writeDate �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setWriteDate(String value) {
        this.writeDate = value;
    }

    /**
     * taxType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getTaxType() {
        return taxType;
    }

    /**
     * taxType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setTaxType(int value) {
        this.taxType = value;
    }

    /**
     * modifyCode �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getModifyCode() {
        return modifyCode;
    }

    /**
     * modifyCode �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setModifyCode(String value) {
        this.modifyCode = value;
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
     * taxRegID �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTaxRegID() {
        return taxRegID;
    }

    /**
     * taxRegID �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTaxRegID(String value) {
        this.taxRegID = value;
    }

    /**
     * corpName �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorpName() {
        return corpName;
    }

    /**
     * corpName �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorpName(String value) {
        this.corpName = value;
    }

    /**
     * ceoName �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCEOName() {
        return ceoName;
    }

    /**
     * ceoName �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCEOName(String value) {
        this.ceoName = value;
    }

    /**
     * amountTotal �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmountTotal() {
        return amountTotal;
    }

    /**
     * amountTotal �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmountTotal(String value) {
        this.amountTotal = value;
    }

    /**
     * taxTotal �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTaxTotal() {
        return taxTotal;
    }

    /**
     * taxTotal �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTaxTotal(String value) {
        this.taxTotal = value;
    }

    /**
     * totalAmount �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTotalAmount() {
        return totalAmount;
    }

    /**
     * totalAmount �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTotalAmount(String value) {
        this.totalAmount = value;
    }

}
