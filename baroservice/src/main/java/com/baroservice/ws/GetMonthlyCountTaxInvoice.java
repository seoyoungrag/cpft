
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
 *         &lt;element name="Year" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="Month" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="PeriodSearchType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="hasCanceled" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
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
    "year",
    "month",
    "periodSearchType",
    "hasCanceled"
})
@XmlRootElement(name = "GetMonthlyCountTaxInvoice")
public class GetMonthlyCountTaxInvoice {

    @XmlElement(name = "CERTKEY")
    protected String certkey;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "Year")
    protected int year;
    @XmlElement(name = "Month")
    protected int month;
    @XmlElement(name = "PeriodSearchType")
    protected int periodSearchType;
    protected boolean hasCanceled;

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
     * year �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getYear() {
        return year;
    }

    /**
     * year �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setYear(int value) {
        this.year = value;
    }

    /**
     * month �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getMonth() {
        return month;
    }

    /**
     * month �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setMonth(int value) {
        this.month = value;
    }

    /**
     * periodSearchType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getPeriodSearchType() {
        return periodSearchType;
    }

    /**
     * periodSearchType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setPeriodSearchType(int value) {
        this.periodSearchType = value;
    }

    /**
     * hasCanceled �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isHasCanceled() {
        return hasCanceled;
    }

    /**
     * hasCanceled �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setHasCanceled(boolean value) {
        this.hasCanceled = value;
    }

}
