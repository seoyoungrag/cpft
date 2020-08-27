
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>TaxInvoiceStateEX complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="TaxInvoiceStateEX"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="MgtKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="InvoiceKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BarobillState" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="IsOpened" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="IsConfirmed" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="RegistDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="WriteDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="PreIssueDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="IssueDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark1" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Remark2" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSSendState" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="NTSSendKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSSendResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSSendDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="NTSResultDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "TaxInvoiceStateEX", propOrder = {
    "mgtKey",
    "invoiceKey",
    "barobillState",
    "isOpened",
    "isConfirmed",
    "registDT",
    "writeDate",
    "preIssueDT",
    "issueDT",
    "remark1",
    "remark2",
    "ntsSendState",
    "ntsSendKey",
    "ntsSendResult",
    "ntsSendDT",
    "ntsResultDT"
})
public class TaxInvoiceStateEX {

    @XmlElement(name = "MgtKey")
    protected String mgtKey;
    @XmlElement(name = "InvoiceKey")
    protected String invoiceKey;
    @XmlElement(name = "BarobillState")
    protected int barobillState;
    @XmlElement(name = "IsOpened")
    protected int isOpened;
    @XmlElement(name = "IsConfirmed")
    protected int isConfirmed;
    @XmlElement(name = "RegistDT")
    protected String registDT;
    @XmlElement(name = "WriteDate")
    protected String writeDate;
    @XmlElement(name = "PreIssueDT")
    protected String preIssueDT;
    @XmlElement(name = "IssueDT")
    protected String issueDT;
    @XmlElement(name = "Remark1")
    protected String remark1;
    @XmlElement(name = "Remark2")
    protected String remark2;
    @XmlElement(name = "NTSSendState")
    protected int ntsSendState;
    @XmlElement(name = "NTSSendKey")
    protected String ntsSendKey;
    @XmlElement(name = "NTSSendResult")
    protected String ntsSendResult;
    @XmlElement(name = "NTSSendDT")
    protected String ntsSendDT;
    @XmlElement(name = "NTSResultDT")
    protected String ntsResultDT;

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
     * invoiceKey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceKey() {
        return invoiceKey;
    }

    /**
     * invoiceKey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceKey(String value) {
        this.invoiceKey = value;
    }

    /**
     * barobillState �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getBarobillState() {
        return barobillState;
    }

    /**
     * barobillState �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setBarobillState(int value) {
        this.barobillState = value;
    }

    /**
     * isOpened �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getIsOpened() {
        return isOpened;
    }

    /**
     * isOpened �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setIsOpened(int value) {
        this.isOpened = value;
    }

    /**
     * isConfirmed �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getIsConfirmed() {
        return isConfirmed;
    }

    /**
     * isConfirmed �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setIsConfirmed(int value) {
        this.isConfirmed = value;
    }

    /**
     * registDT �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRegistDT() {
        return registDT;
    }

    /**
     * registDT �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRegistDT(String value) {
        this.registDT = value;
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
     * preIssueDT �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPreIssueDT() {
        return preIssueDT;
    }

    /**
     * preIssueDT �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPreIssueDT(String value) {
        this.preIssueDT = value;
    }

    /**
     * issueDT �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIssueDT() {
        return issueDT;
    }

    /**
     * issueDT �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIssueDT(String value) {
        this.issueDT = value;
    }

    /**
     * remark1 �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRemark1() {
        return remark1;
    }

    /**
     * remark1 �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRemark1(String value) {
        this.remark1 = value;
    }

    /**
     * remark2 �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRemark2() {
        return remark2;
    }

    /**
     * remark2 �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRemark2(String value) {
        this.remark2 = value;
    }

    /**
     * ntsSendState �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getNTSSendState() {
        return ntsSendState;
    }

    /**
     * ntsSendState �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setNTSSendState(int value) {
        this.ntsSendState = value;
    }

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
     * ntsSendResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSSendResult() {
        return ntsSendResult;
    }

    /**
     * ntsSendResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSSendResult(String value) {
        this.ntsSendResult = value;
    }

    /**
     * ntsSendDT �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSSendDT() {
        return ntsSendDT;
    }

    /**
     * ntsSendDT �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSSendDT(String value) {
        this.ntsSendDT = value;
    }

    /**
     * ntsResultDT �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNTSResultDT() {
        return ntsResultDT;
    }

    /**
     * ntsResultDT �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNTSResultDT(String value) {
        this.ntsResultDT = value;
    }

}
