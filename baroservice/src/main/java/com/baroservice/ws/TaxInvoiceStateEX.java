
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>TaxInvoiceStateEX complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
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
     * invoiceKey 속성의 값을 가져옵니다.
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
     * invoiceKey 속성의 값을 설정합니다.
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
     * barobillState 속성의 값을 가져옵니다.
     * 
     */
    public int getBarobillState() {
        return barobillState;
    }

    /**
     * barobillState 속성의 값을 설정합니다.
     * 
     */
    public void setBarobillState(int value) {
        this.barobillState = value;
    }

    /**
     * isOpened 속성의 값을 가져옵니다.
     * 
     */
    public int getIsOpened() {
        return isOpened;
    }

    /**
     * isOpened 속성의 값을 설정합니다.
     * 
     */
    public void setIsOpened(int value) {
        this.isOpened = value;
    }

    /**
     * isConfirmed 속성의 값을 가져옵니다.
     * 
     */
    public int getIsConfirmed() {
        return isConfirmed;
    }

    /**
     * isConfirmed 속성의 값을 설정합니다.
     * 
     */
    public void setIsConfirmed(int value) {
        this.isConfirmed = value;
    }

    /**
     * registDT 속성의 값을 가져옵니다.
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
     * registDT 속성의 값을 설정합니다.
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
     * writeDate 속성의 값을 가져옵니다.
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
     * writeDate 속성의 값을 설정합니다.
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
     * preIssueDT 속성의 값을 가져옵니다.
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
     * preIssueDT 속성의 값을 설정합니다.
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
     * issueDT 속성의 값을 가져옵니다.
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
     * issueDT 속성의 값을 설정합니다.
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
     * remark1 속성의 값을 가져옵니다.
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
     * remark1 속성의 값을 설정합니다.
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
     * remark2 속성의 값을 가져옵니다.
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
     * remark2 속성의 값을 설정합니다.
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
     * ntsSendState 속성의 값을 가져옵니다.
     * 
     */
    public int getNTSSendState() {
        return ntsSendState;
    }

    /**
     * ntsSendState 속성의 값을 설정합니다.
     * 
     */
    public void setNTSSendState(int value) {
        this.ntsSendState = value;
    }

    /**
     * ntsSendKey 속성의 값을 가져옵니다.
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
     * ntsSendKey 속성의 값을 설정합니다.
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
     * ntsSendResult 속성의 값을 가져옵니다.
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
     * ntsSendResult 속성의 값을 설정합니다.
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
     * ntsSendDT 속성의 값을 가져옵니다.
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
     * ntsSendDT 속성의 값을 설정합니다.
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
     * ntsResultDT 속성의 값을 가져옵니다.
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
     * ntsResultDT 속성의 값을 설정합니다.
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
